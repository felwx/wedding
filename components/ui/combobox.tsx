"use client"

import { useState, useRef, type KeyboardEvent } from "react"
import { Listbox, ListboxInput, ListboxList, ListboxOption } from "@/components/ui/listbox"

export function Combobox({
  items,
  value,
  onChange,
  placeholder,
}: { items: string[]; value: string; onChange: (value: string) => void; placeholder: string }) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState("")

  const filteredItems = query ? items.filter((item) => item.toLowerCase().includes(query.toLowerCase())) : items

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown" && filteredItems.length > 0) {
      inputRef.current?.focus()
    }
  }

  return (
    <Listbox value={value} onChange={onChange}>
      <ListboxInput ref={inputRef} onKeyDown={handleKeyDown} placeholder={placeholder} />
      <ListboxList>
        {filteredItems.map((item) => (
          <ListboxOption key={item} value={item}>
            {item}
          </ListboxOption>
        ))}
      </ListboxList>
    </Listbox>
  )
}

