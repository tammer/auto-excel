import { Row, Col } from "antd";
import Container from "../../common/Container";
import { Fade } from "react-awesome-reveal";

import styled from "styled-components";

const StyledContent = styled.div`
  h2 {
    font-size: 15px;
  }
  p {
    font-size: 15px;
  }
`;


const TermsOfService = () => {
  return (
    <Container>
      <StyledContent>
        <Row justify="center" align="middle">
          <Col lg={16} md={20} sm={24} xs={24}>
            <Fade>
              <div>
              <h2>Terms of Service</h2>

<h2>1. Acceptance of Terms</h2>
<p>By accessing or using our web application (the "Service"), you agree to be bound by these Terms of Service (the "Terms"). If you do not agree to these Terms, do not use the Service.</p>

<h2>2. Privacy and Data Protection</h2>
<p>"User Data" is any data you provide to us through the Service, including data within spreadsheets. We do not retain any User Data, share any User Data with third parties, or use any User Data to train our models. Your data remains private. We do not archive any User Data; once you delete it from our system, we destroy all copies of it.</p>

<h2>3. Modifications to the Service</h2>
<p>We reserve the right to modify, suspend, or discontinue the Service at any time, with or without notice. We are not liable for any modifications, suspension, or discontinuation of the Service.</p>

<h2>4. User Conduct</h2>
<p>You agree not to use the Service for any unlawful purposes, to violate any applicable laws, or to interfere with the operation of the Service.</p>

<h2>5. Disclaimer of Warranties</h2>
<p>The Service is provided "as is" and "as available" without warranties of any kind. We disclaim all warranties, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>

<h2>6. Limitation of Liability</h2>
<p>To the fullest extent permitted by law, we are not liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues arising from your use of the Service.</p>

<h2>7. Changes to These Terms</h2>
<p>We may update these Terms from time to time. Continued use of the Service after any modifications constitutes acceptance of the revised Terms.</p>

              </div>
            </Fade>
          </Col>
        </Row>
      </StyledContent>
    </Container>
  );
};

export default TermsOfService; 