import React from "react";
import { Button, Card } from "@nextui-org/react";
import Component from "../teleporthq/components/component";
import styles from "../teleporthq/style.module.css";

const Custom = () => {
  return (
    <div>
      <Button>Default</Button>
      <h1 className={styles["red"]}>Hello</h1>
      <Component />
      <Card>
        <h1>test</h1>
      </Card>
    </div>
  );
};

export default Custom;
