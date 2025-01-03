"use client";

import * as m from "@/paraglide/messages";
import { Home, Logs, Package, ScanBarcode, Waves } from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "user",
    email: "email@example.com",
  },
  navMain: [
    {
      title: m.cuddly_active_guppy_grip(),
      url: "/",
      icon: Home,
    },
    {
      title: m.tense_spicy_myna_dare(),
      url: "/waves",
      icon: Waves,
    },
    {
      title: m.petty_late_buzzard_gulp(),
      url: "/orders",
      icon: Package,
    },
    {
      title: m.flat_patient_racoon_succeed(),
      url: "/skus",
      icon: ScanBarcode,
    },
    {
      title: m.cozy_funny_chipmunk_attend(),
      url: "/logs",
      icon: Logs,
    },
  ],
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
