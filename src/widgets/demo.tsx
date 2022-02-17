import React from "react";

import { Button, Card } from "@nextui-org/react";

const Demo = ({ color, title }: { color: string, title: string }) => {
  return (
    <div style={{ color: color || ''}}>
      {title}
    </div>
  );
};

export default Demo;
