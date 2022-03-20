import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
        <SignUp>Get all there</SignUp>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi minima
          molestiae laboriosam saepe porro molestias adipisci aliquam similique
          dignissimos tempore?
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
      </CTA>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/images/login-background.jpg");
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    z-index: -1;
    opacity: 0.7;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const CTALogoOne = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  text-align: center;
  color: #f9f9f9;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const CTALogoTwo = styled.img`
  width: 90%;
`;

export default Login;
