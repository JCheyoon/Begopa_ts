import { AuthenticationContainer } from "./Authentication.style";
import { Page } from "../Components/Page/Page.style";

import SignInForm from "../Components/SignIn/SignInForm.component";

const Authentication = () => {
  return (
    <Page>
      <AuthenticationContainer>
        <SignInForm />
      </AuthenticationContainer>
    </Page>
  );
};

export default Authentication;
