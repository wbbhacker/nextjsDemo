'use client';
import React, { useState, useEffect } from 'react';

import { Listbox, ListboxItem, ListboxSection, cn } from '@nextui-org/react';
import { ListboxWrapper } from './ListboxWrapper';
import Icons from '@/components/Icons';

const ListBookMark = (props) => {
    const iconClasses =
        'text-xl text-default-500 pointer-events-none flex-shrink-0';

    return (
        <ListboxWrapper>
            <Listbox variant="flat" aria-label="Listbox menu with sections">
                <ListboxSection title="Actions" showDivider>
                    <ListboxItem
                        key="new"
                        description="Create a new file"
                        startContent={
                            <Icons name={'sun'} className={iconClasses} />
                        }
                    >
                        New fileNew fileNew fileNew fileNew fileNew fileNew
                        fileNew file
                    </ListboxItem>
                    <ListboxItem
                        key="copy"
                        description="Copy the file link"
                        startContent={
                            <Icons name={'sun'} className={iconClasses} />
                        }
                    >
                        Copy link
                    </ListboxItem>
                    <ListboxItem
                        key="edit"
                        description="Allows you to edit the file"
                        startContent={
                            <Icons name={'sun'} className={iconClasses} />
                        }
                    >
                        Edit file
                    </ListboxItem>
                </ListboxSection>
                <ListboxSection title="Danger zone">
                    <ListboxItem
                        key="delete"
                        className="text-danger"
                        color="danger"
                        description="Permanently delete the file"
                        startContent={
                            <Icons
                                name={'sun'}
                                className={cn(iconClasses, 'text-danger')}
                            />
                        }
                    >
                        Delete file
                    </ListboxItem>
                </ListboxSection>
            </Listbox>
        </ListboxWrapper>
    );
};
export default ListBookMark;
