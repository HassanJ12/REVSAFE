import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = [
  "S.No",
  "Review",
  "Sentiment",
  "Authenicity",
];

const TABLE_ROWS = [
  {
    num: "1",
    review: "reviewsssssssss",
    sentiment: "positive",
    fake:"fake"
  },
  {
    num: "40",
    review: "reviewsssssssssr",
    sentiment: "positive",
    fake:"fake"
  },
  {
    num: "2",
    review: "reviewsssssssss",
    sentiment: "negative",
    fake:"real"
  },
  {
    num: "3",
    review: "reviewsssssssssr",
    sentiment: "positive",
    fake:"fake"
  },
  {
    num: "4",
    review: "reviewsssssssss",
    sentiment: "positive",
    fake:"real"
  },
];

export default  function DTable({data}) {
  function truncateReview(review) {
    const maxLength = 80;
    const ending = '...';
   
    if (review.length > maxLength) {
       return review.substring(0, maxLength - ending.length) + ending;
    } else {
       return review;
    }
   }
  return (
    <Card className="mt-5 h-full w-11/12 bg-[#323262] text-cyan-50 rounded-md  mx-auto">
      <table className=" w-full min-w-max table-auto text-left text-cyan-50 rounded-md">
        <thead className="rounded-md">
          <tr className="rounded-md">
            {TABLE_HEAD.map((head,idx) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-[#4646b2] p-4 rounded"
              >
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal leading-none"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(({ num, REVIEW, sentiment,Predictions }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={num}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {index+1}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {truncateReview(REVIEW)}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {sentiment}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {Predictions}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
