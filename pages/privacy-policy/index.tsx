import styled from "styled-components";

import { Section, theme } from "styles";

function PrivacyPolicyPage() {
  return (
    <PrivacyPolicyPageContainer>
      <h1>Privacy Policy</h1>
      <p>
        I collect user first names and email addresses. I use your personal data
        get contacts throw the website. By using the Service, You agree to the
        collection and use of information in accordance with this Privacy
        Policy.
      </p>
    </PrivacyPolicyPageContainer>
  );
}

const PrivacyPolicyPageContainer = styled(Section)`
  h1 {
    text-align: center;
    color: ${theme.colors.teal};
    margin-bottom: 1rem;
  }
`;

export default PrivacyPolicyPage;
