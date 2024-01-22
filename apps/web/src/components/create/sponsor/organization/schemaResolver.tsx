import { zodResolver } from '@hookform/resolvers/zod';
import { ResolverOptions } from 'react-hook-form';
import { z } from 'zod';

const baseSchema = z.object({
  totalCommitted: z
    .number({
      invalid_type_error: 'Please enter a valid numeric value for the amount',
      required_error:
        'This field is mandatory. Enter your amount in USD to proceed.',
      description: 'Total Committed Amount',
    })
    .min(
      1000,
      'The amount must be at least $1,000 to meet the minimum requirement',
    ),

  upfrontPay: z.array(
    z.object({
      // token type is SelectOptionsType
      token: z.string({
        invalid_type_error: 'Please select a token from the list.',
        required_error:
          'A token selection is required to proceed with the upfront contribution',
        description: 'Token',
      }),
      amount: z
        .number({
          invalid_type_error:
            'Enter a numeric value for the upfront contribution amount for the selected token',
          required_error:
            'The upfront contribution amount is mandatory; please enter the value to continue',
          description: 'Amount',
        })
        .min(
          1,
          'An amount is required for the upfront contribution. Please enter a value.',
        ),
    }),
  ),
  name: z.string().optional(),
  logo: z.string().url().optional(),
  isSponsorshipPublic: z.boolean(),
  wantsSelfCustody: z.boolean().optional(),
  treasuryMangers: z
    .array(
      z.object({
        username: z.string(),
        id: z.string(),
        mainWallet: z.string(),
      }),
    )
    .optional(),
});

// Extended schema where `name` and `logo` are required
const isPublicExtendedSchema = baseSchema.extend({
  name: z
    .string({
      invalid_type_error: 'Enter a valid Name',
      required_error: 'You can not skip this field',
      description: 'Name',
    })
    .min(1, 'Name is required when sponsorship is public')
    .max(50, 'Name can not be more than 50 characters'),
  logo: z
    .string()
    .url('Logo URL is invalid')
    .min(1, 'Logo is required when sponsorship is public'),
  wantsSelfCustody: z.boolean().optional(),
});

const isManagerExtendedSchema = isPublicExtendedSchema.extend({
  name: z
    .string({
      invalid_type_error: 'Enter a valid Name',
      required_error: 'You can not skip this field',
      description: 'Name',
    })
    .min(1, 'Name is required when sponsorship is public')
    .max(50, 'Name can not be more than 50 characters'),
  logo: z
    .string()
    .url('Logo URL is invalid')
    .min(1, 'Logo is required when sponsorship is public'),
});

// Custom resolver function to handle the schema switching logic
export const OrganizationSponsorFormSchemaResolver = async (
  values: { isSponsorshipPublic: any; wantsSelfCustody: any },
  context: any,
  options: ResolverOptions<any>,
) => {
  // if user has selected both isSponsorshipPublic and wantsSelfCustody then use isManagerExtendedSchema
  const schemaToUse = values.isSponsorshipPublic
    ? values.wantsSelfCustody
      ? isManagerExtendedSchema
      : isPublicExtendedSchema
    : baseSchema;
  return zodResolver(schemaToUse)(values, context, options);
};
