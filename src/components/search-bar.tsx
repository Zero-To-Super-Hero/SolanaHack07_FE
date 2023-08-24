import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
export function Search() {
    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
                type="search"
                placeholder="Search..."
                className="md:w-[100px] lg:w-[300px]"
            />
            <Button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
        </div>
    )
}