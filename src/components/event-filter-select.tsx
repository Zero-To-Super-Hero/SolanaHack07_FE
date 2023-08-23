import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function EventFilterSelect() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Filters</SelectLabel>
          <SelectItem value="priceLow">Ticket prices(Low to high)</SelectItem>
          <SelectItem value="priceHigh">Ticket prices(High to low)</SelectItem>
          <SelectItem value="isComing">Time(Is coming)</SelectItem>
          <SelectItem value="lastestCreated">Time(Lastest created)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
