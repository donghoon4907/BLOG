import redirect from "./redirect";
import { meQuery } from "../graphql/auth/query/me";

type Props = {
  data?: object;
  error?: string;
};

export default async (context: any): Promise<Props> => {
  const result = {};
  try {
    const { getMyProfile } = await context.apolloClient.query({
      query: meQuery
    });
    if (getMyProfile) {
      result["data"] = getMyProfile;
    }
  } catch (error) {
    try {
      const { message, status } = JSON.parse(error.message);
      if (status === 401) {
        alert("세션이 만료되었습니다. 로그인 화면으로 이동합니다.");
        redirect(context.ctx, "/login");
      } else {
        result["error"] = message;
      }
    } catch {
      result["error"] = error.message;
    }
  } finally {
    return result;
  }
};
