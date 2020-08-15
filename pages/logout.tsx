import { logOutMutation } from "../graphql/auth/mutation/logout";
import { VSSContext } from "../interfaces/VSSContext";
import redirect from "../lib/redirect";

const Logout = () => {
  return null;
};

Logout.getInitialProps = async ({ apolloClient, ...ctx }: VSSContext) => {
  await apolloClient.mutate({ mutation: logOutMutation });
  await apolloClient.resetStore();
  redirect(ctx, "/login");
  return {};
};

export default Logout;
