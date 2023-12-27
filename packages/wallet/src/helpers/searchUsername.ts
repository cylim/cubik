import { logApi } from '@cubik/logger/src';

type SearchUsernameResponse = {
  username: string;
  usernameAvailable: boolean;
};
export const searchUsername = async (
  username: string,
): Promise<SearchUsernameResponse> => {
  try {
    const searchResponse = await fetch(
      `/api/user/searchUsername?username=${username}`,
    );
    const searchResponseJson = await searchResponse.json();
    if (searchResponseJson.success) {
      return searchResponseJson.result;
    }
    return {
      username,
      usernameAvailable: false,
    };
  } catch (error) {
    console.error(error);
    logApi({
      error,
      message: 'Search username failed!',
      statusCode: 500,
      level: 'error',
      body: {
        username,
      },
      source: 'search Create user modal',
    });
    return {
      username,
      usernameAvailable: false,
    };
  }
};
