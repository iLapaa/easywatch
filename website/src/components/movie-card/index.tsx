import Image from "next/image";
import movieImg from "../../../public/images/harry_potter.jpg";
import Rating from "./rating";
import Time from "./time";
import Link from "next/link";

interface IMovieCardProps {
  movieUrl: string;
}

export default function MovieCard({ movieUrl }: IMovieCardProps) {
  return (
    <>
      <Link href={movieUrl}>
        <div className="relative h-[230px] w-[160px] max-w-xs overflow-hidden rounded-xl bg-cover bg-no-repeat">
          <Image
            className="absolute hover:scale-110"
            src={movieImg}
            alt="image"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden opacity-0 transition duration-300 ease-in-out hover:opacity-100">
            <div className="absolute h-full w-full bg-black opacity-60"></div>

            <div className="mx-2">
              <div className="absolute top-2 justify-end">
                <Time time={130} />
              </div>
              <div className="absolute left-20 top-2 justify-end">
                <Rating rating={4} />
              </div>
              <div className="absolute top-44">
                <p>Harry Potter</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
