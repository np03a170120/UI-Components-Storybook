import Panes from "./Panes";

export default {
  title: "Panes",
  component: Panes,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else.",
      },
    },
  },
  argTypes: {
    size: {
      description: "small, medium, large",
    },
  },
};

export const Default = () => {
  const tabLabels = ["Tab One", "Tab Two", "Tab Three"];
  const tabContent = [
    <div>Content for Tab One</div>,
    <div>Content for Tab Two</div>,
    <div>Content for Tab Three</div>,
  ];
  return (
    <>
      <Panes tabLabels={tabLabels} tabContent={tabContent} />
    </>
  );
};
