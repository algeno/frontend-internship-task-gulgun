import { useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import { Input } from "./ui/input";

export interface SearchProps {
  onChangeSearchQuery: (searchQuery: string) => void;
}

export default function SearchInput(props: SearchProps) {
  const [searchQuery, setSearchQuery] = useState<string | undefined>();
  const { onChangeSearchQuery } = props;
  const debouncedSearchQuery = useDebounce(searchQuery, 250);

  useEffect(() => {
    if (debouncedSearchQuery !== undefined) {
      onChangeSearchQuery(debouncedSearchQuery);
    }
  }, [debouncedSearchQuery, onChangeSearchQuery]);

  return (
    <div className='flex w-full items-center'>
      <Input
        id='search'
        type='search'
        placeholder='Search Name...'
        aria-label='Search'
        className='w-full'
        onChange={(event) => setSearchQuery(event.target.value)}
      />
    </div>
  );
}
