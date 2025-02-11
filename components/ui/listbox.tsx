"use client"

import { useState, type KeyboardEvent } from "react"

const Listbox = ({
  value,
  onChange,
  children,
}: {
  value: string
  onChange: (value: string) => void
  children: React.ReactNode
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return <div className="relative">{children}</div>
}

const ListboxInput = React.forwardRef<
  HTMLInputElement,
  { onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void }
>(({ onKeyDown, ...props }, ref) => (
  <input
    type="text"
    className="w-full border border-input bg-background text-foreground rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
    {...props}
    ref={ref}
    onKeyDown={onKeyDown}
  />
))
ListboxInput.displayName = "ListboxInput"

const ListboxList = ({ children }: { children: React.ReactNode }) => (
  <ul className="absolute top-full left-0 z-10 w-full bg-background border border-input rounded-md shadow-md overflow-hidden">
    {children}
  </ul>
)
ListboxList.displayName = "ListboxList"

const ListboxOption = React.forwardRef<HTMLLIElement, { value: string; children: React.ReactNode }>(
  ({ value, children, ...props }, ref) => (
    <li ref={ref} className="px-3 py-2 hover:bg-primary hover:text-primary-foreground cursor-pointer" {...props}>
      {children}
    </li>
  ),
)
ListboxOption.displayName = "ListboxOption"

export { Listbox, ListboxInput, ListboxList, ListboxOption }

