import { FilledStarIcon, OutlinedStarIcon } from "@/components/ui/icons";

interface IRatingProps {
  rating: number;
}

export default function Rating({ rating }: IRatingProps) {
  const renderStars = (rating: number): JSX.Element[] => {
    return Array(5)
      .fill(0)
      .map((_, i) =>
        rating > i ? <FilledStarIcon key={i} /> : <OutlinedStarIcon key={i} />,
      );
  };

  return <div className="flex">{renderStars(rating)}</div>;
}
