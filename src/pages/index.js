import { HeaderSorting } from "@/components/table/HeaderSorting";
import PopupComponent from "@/components/table/PopupComponent";
import { Button } from "@/components/ui/button";
import { useToggle } from "@/hooks/hooks";

const columnsLoginBanner = [
  {
    accessorKey: "title",
    header: ({ column }) => <HeaderSorting column={column} title="Title" />,
    cell: ({ row }) => <div className="w-[10vw]">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "bannerPathUrl",
    header: "Image",
    cell: ({ row }) => (
      <div className="line-clamp-1 w-[20vw]">
        {row.getValue("bannerPathUrl")}
      </div>
    ),
  },
  {
    accessorKey: "desc",
    header: ({ column }) => (
      <HeaderSorting column={column} title="Description" />
    ),
    cell: ({ row }) => (
      <div className="line-clamp-1 w-[20vw]">{row.getValue("desc")}</div>
    ),
  },
  {
    accessorKey: "cta",
    header: "Call to Action",
    cell: ({ row }) => (
      <div className="line-clamp-1 w-[10vw]">{row.getValue("cta")}</div>
    ),
  },
];

const dummyData = [
  {
    id: 1,
    title: "Login Banner",
    bannerPathUrl: "https://via.placeholder.com/150",
    desc: "Login Banner",
    cta: "Login",
  },
];

export default function Home() {
  const [openPopup, togglePopup] = useToggle();

  const handlePopup = () => {
    togglePopup();
  };
  return (
    <>
      <div>Dashboard</div>
      <Button onClick={handlePopup}>Button</Button>
      <PopupComponent open={openPopup} onOpenChange={togglePopup} />
    </>
  );
}
