import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "../../../@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../@/components/ui/collapsible";

import { LayoutDashboard, FolderOpen, Star, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <h2 className="text-xl font-bold text-center mt-8">Foldr</h2>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <LayoutDashboard />
                <Link to="/">
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <Collapsible>
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    <FolderOpen />
                    <span className="text-sm">My Storage</span>
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem className="text-sm">
                      <Link to="/photos">Photos</Link>
                    </SidebarMenuSubItem>

                    <SidebarMenuSubItem className="text-sm">
                      <Link to="/audio">Audio</Link>
                    </SidebarMenuSubItem>

                    <SidebarMenuSubItem className="text-sm">
                      <Link to="/docs">Docunent</Link>
                    </SidebarMenuSubItem>

                    <SidebarMenuSubItem className="text-sm">
                      <Link to="/vids">Videos</Link>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <Star />
                <Link to="/favorites">
                  <span>Favorites</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <Trash2 />
                <Link to="/trash">
                  <span>Trash</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <p className="text-sm">Storage: 2.5 GB / 10 GB</p>
      </SidebarFooter>
    </Sidebar>
  );
}
