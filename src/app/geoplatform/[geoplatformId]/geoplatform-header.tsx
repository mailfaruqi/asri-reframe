import { Button } from "@/components/ui/button"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator 
} from "@/components/ui/dropdown-menu"
import { Hint } from "@/components/hint"
import { Doc } from "../../../../convex/_generated/dataModel"
import { ChevronDownIcon, ListFilter, SquarePen } from "lucide-react"
import { HiChevronDoubleLeft } from "react-icons/hi" 
// import { PreferencesModal } from "./preferences-modal"
import { useState } from "react"
import { useSidebar } from "@/components/sidebar-context"
// import { InviteModal } from "./invite-modal"

interface GeoplatformHeaderProps {
  geoplatform: Doc<"geoplatforms">
  isAdmin: boolean
}

export const GeoplatformHeader = ({ geoplatform, isAdmin }: GeoplatformHeaderProps) => {
  const [preferencesOpen, setPreferencesOpen] = useState(false)
  const [inviteOpen, setInviteOpen] = useState(false)
  // const { isMinimized } = useSidebar()
  
  return (
    <>
      {/* <InviteModal open={inviteOpen} setOpen={setInviteOpen} name={workspace.name} joinCode={workspace.joinCode}/> */}
      {/* <PreferencesModal open={preferencesOpen} setOpen={setPreferencesOpen} initialValue={workspace.name}/> */}
      <div className="flex items-center justify-between px-4 h-[49px] gap-0.5 z-10">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="transparent" className="font-semibold text-lg w-auto p-1.5 overflow-hidden" size="sm">
              <span className="truncate">{geoplatform?.name}</span>
              <ChevronDownIcon className="size-4 ml-1 shrink-0"/>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" align="start" className="w-64">
            <DropdownMenuItem
              className="cursor-pointer capitalize"
            >
              <div className="size-9 relative overflow-hidden bg-[#616061] text-white font-semibold text-xl rounded-md flex items-center justify-center mr-2">
                {geoplatform.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex flex-col items-start">
                <p className="font-bold">{geoplatform.name}</p>
                <p className="text-xs text-muted-foreground">Active Workspace </p>
              </div>
            </DropdownMenuItem>
            {isAdmin && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer py-2"
                  onClick={() => {setInviteOpen(true)}}
                >
                  Invite people to {geoplatform.name}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer py-2"
                  onClick={() => {setPreferencesOpen(true)}}
                >
                  Preferences
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex items-center gap-0.5">
          <Hint label="Filter workspaces" side="bottom">
            <Button variant="transparent" size="iconSm">
              <ListFilter className="size-4"/>
            </Button>
          </Hint>
          <Hint label="Minimize sidebar" side="bottom">
            <Button variant="transparent" size="iconSm">
              <HiChevronDoubleLeft className="size-4"/>
            </Button>
          </Hint>
        </div>
      </div>
    </>
  )
}