"use client";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import * as m from "@/paraglide/messages";
import { Home, Logs, Package, ScanBarcode, Waves } from "lucide-react";
import * as React from "react";

const data = {
  user: {
    name: "User",
    email: "email@example.com",
  },
  navMain: [
    {
      title: m.sea_bright_koala_swim(),
      url: "/",
      icon: Home,
    },
    {
      title: m.swift_trick_salmon_stop(),
      url: "/waves",
      icon: Waves,
    },
    {
      title: m.petty_away_alpaca_gaze(),
      url: "/orders",
      icon: Package,
    },
    {
      title: m.merry_blue_anteater_believe(),
      url: "/skus",
      icon: ScanBarcode,
    },
    {
      title: m.careful_alert_capybara_gaze(),
      url: "/logs",
      icon: Logs,
    },
  ],
  projects: [],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { setOpen } = useSidebar();

  return (
    <Sidebar
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      collapsible="icon"
      {...props}
    >
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
