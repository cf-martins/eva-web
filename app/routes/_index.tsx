import { PlusIcon, RotateCcwIcon } from "lucide-react";
import * as React from "react";
import { IconButton } from "~/lib/components/ui/icon-button";
import { Text } from "~/lib/components/ui/text";
import { css } from "~/styled-system/css";
import { Center, HStack, VStack } from "~/styled-system/jsx";
import type { Route } from "./+types/_index";

// biome-ignore lint/correctness/noEmptyPattern:
export function meta({}: Route.MetaArgs) {
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
      minHeight="dvh"
      background="bg.muted"
    >
      <VStack>
        <Text
          as="span"
          size="7xl"
          fontWeight="bold"
        >
          {count.toLocaleString()}
        </Text>
        <HStack
          padding="2"
          background="bg.emphasized"
          borderColor="border.muted"
          borderWidth="thin"
          borderRadius="full"
        >
          <IconButton
            onClick={increment}
            size="2xl"
            borderRadius="full"
          >
            <PlusIcon className={css({ color: "colorPalette.a11" })} />
          </IconButton>
          <IconButton
            onClick={reset}
            variant="subtle"
            colorPalette="red"
            borderRadius="full"
          >
            <RotateCcwIcon />
          </IconButton>
        </HStack>
      </VStack>
    </Center>
  );
}
