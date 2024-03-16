import React from 'react'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"

import Link from 'next/link'

function CategoryList({ category }: any) {

    return (

        <div className='h-screen flex flex-col '>
        
            <Command>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup className='font-semibold ' heading="Suggestions">
                        {category.map((item: any,index: React.Key | null | undefined) => (
                            <Link key={ index} href={`${item.attributes.Name}`}>
                                <CommandItem>
                                    <label >{item.attributes.Name}</label>
                                </CommandItem>
                            </Link>
                        ))}
                    </CommandGroup>
                    <CommandSeparator />

                </CommandList>
            </Command>

        </div>
    )
}

export default CategoryList