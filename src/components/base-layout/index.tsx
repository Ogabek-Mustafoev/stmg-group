import {Footer, Header} from "@/components";
import {FC, ReactNode} from "react";

interface IBaseLayout {
  children: ReactNode;
}

export const BaseLayout: FC<IBaseLayout> = ({children}) => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden">
        {children}
      </main>
      <Footer/>
    </>
  )
}