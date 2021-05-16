import React from "react";
import Badge from './index';

export default {
  title: "atoms/Badge",
  component: Badge
};

export const Default = () => <Badge done={true}>결제완료</Badge>;
