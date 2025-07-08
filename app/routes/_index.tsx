import { PlusIcon, RotateCcwIcon } from "lucide-react";
import * as React from "react";
import { IconButton } from "~/lib/components/ui/icon-button";
import { Text } from "~/lib/components/ui/text";
import { css } from "~/styled-system/css";
import { Center, HStack, VStack } from "~/styled-system/jsx";
import type { Route } from "./+types/_index";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function IndexPage() {
  const [count, setCount] = React.useState(1_000_000);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <Center
      background="bg.muted"
      minHeight="dvh"
    >
      <VStack>
        <Text
          as="span"
          fontWeight="bold"
          size="7xl"
        >
          {count.toLocaleString()}
        </Text>
        <HStack
          background="bg.emphasized"
          borderColor="border.muted"
          borderRadius="full"
          borderWidth="thin"
          padding="2"
        >
          <IconButton
            borderRadius="full"
            onClick={increment}
            size="2xl"
          >
            <PlusIcon className={css({ color: "colorPalette.a11" })} />
          </IconButton>
          <IconButton
            borderRadius="full"
            colorPalette="red"
            onClick={reset}
            variant="subtle"
          >
            <RotateCcwIcon />
          </IconButton>
        </HStack>
      </VStack>
    </Center>
  );
}
