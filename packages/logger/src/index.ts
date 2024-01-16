import { ILogObj, Logger as TsLogger } from 'tslog';

export * from './axiom';

const tslog: TsLogger<ILogObj> = new TsLogger({
  prettyLogTimeZone: 'UTC',
  prettyErrorStackTemplate:
    '  • {{fileName}}\t{{method}}\n\t{{filePathWithLine}}', // default
  prettyErrorTemplate:
    '\n{{errorName}} {{errorMessage}}\nerror stack:\n{{errorStack}}', // default
  //   prettyLogTemplate: '{{hh}}:{{MM}}:{{ss}}:{{ms}}\t{{logLevelName}}', // default with exclusion of `{{filePathWithLine}}`
  stylePrettyLogs: true,
  prettyLogStyles: {
    name: 'yellow',
    dateIsoStr: 'blue',
  },
  type: 'pretty',
});
export const logInfo = (data: any) => {
  //   tslog.info(data);
  const a = tslog.getSubLogger({
    name: 'info',
    type: 'pretty',
    prefix: ['payment-service:stripe'],
  });
  a.info(data);
};
export const logE = (data: any) => {
  tslog.error(data);
};
