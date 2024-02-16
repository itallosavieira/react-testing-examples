import React from "react";
import { Header, Footer } from "../../components";
import styles from "./AppLayout.module.css"

type Props = {
  children: React.ReactNode
}

const AppLayout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>

      <div className={styles.content}> 
        {children} 
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default AppLayout;