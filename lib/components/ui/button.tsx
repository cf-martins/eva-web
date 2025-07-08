import { forwardRef } from "react";
import { Center, styled } from "styled-system/jsx";
import { Spinner } from "./spinner";
import {
  Button as StyledButton,
  type ButtonProps as StyledButtonProps,
} from "./styled/button";

interface ButtonLoadingProps {
  loading?: boolean;
  loadingText?: React.ReactNode;
}

export interface ButtonProps extends StyledButtonProps, ButtonLoadingProps {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { loading, disabled, loadingText, children, ...rest } = props;

    const trulyDisabled = loading || disabled;

    return (
      <StyledButton
        disabled={trulyDisabled}
        ref={ref}
        {...rest}
      >
        {(() => {
          if (loading && !loadingText) {
            return (
              <>
                <ButtonSpinner />
                <styled.span opacity={0}>{children}</styled.span>
              </>
            );
          }
          if (loadingText) {
            return loadingText;
          }
          return children;
        })()}
      </StyledButton>
    );
  },
);

Button.displayName = "Button";

const ButtonSpinner = () => (
  <Center
    inline
    insetStart="50%"
    position="absolute"
    top="50%"
    transform="translate(-50%, -50%)"
  >
    <Spinner
      borderRightColor="fg.disabled"
      borderTopColor="fg.disabled"
      borderWidth="1.5px"
      height="1.1em"
      width="1.1em"
    />
  </Center>
);
