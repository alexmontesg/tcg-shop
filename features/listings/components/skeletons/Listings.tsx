import ContentLoader from "react-content-loader";

export default function ListingsSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={992}
      height={600}
      viewBox="0 0 500 350"
      backgroundColor="#2a2a2a"
      foregroundColor="#444"
    >
      {Array.from({ length: 4 }).flatMap((_, idx) => {
        const margin = 50;
        const height = 116;

        const yTitle = idx * (height + margin);
        const yContent = yTitle + 33;

        return [
          <rect key={`t1-${idx}`} x="42" y={yTitle} width="184" height="24" />,
          <rect
            key={`c1-${idx}`}
            x="42"
            y={yContent}
            width="88"
            height={height}
          />,
          <rect
            key={`c2-${idx}`}
            x="150"
            y={yContent}
            width="76"
            height="57"
          />,

          <rect key={`t2-${idx}`} x="268" y={yTitle} width="184" height="24" />,
          <rect
            key={`c3-${idx}`}
            x="268"
            y={yContent}
            width="88"
            height={height}
          />,
          <rect
            key={`c4-${idx}`}
            x="376"
            y={yContent}
            width="76"
            height="57"
          />,
        ];
      })}
    </ContentLoader>
  );
}
