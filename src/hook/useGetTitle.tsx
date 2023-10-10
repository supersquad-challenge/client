import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export const useGetTitle = () => {
  const [title, setTitle] = useState<string>('')
  const params = useSearchParams();
  const pathname = usePathname();

  const appState = params.get('state');

  useEffect(() => {
    if (pathname === "/") {
      setTitle(appState === "application" ? "Supersquad" : "Ongoing Challenges");
    } else if (pathname === "/my") {
      setTitle("My Challenges")
    }
  }, [])
  return title;
}
