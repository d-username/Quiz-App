export default function Stats({ statsData }) {
  return (
    <div>
      <p>
        Number of quizes taken <span>{statsData.quizes_taken}</span>
      </p>
      <p>
        Number of good answers <span>{statsData.total_questions_answered}</span>
      </p>
      <p>
        Number of good answers <span>{statsData.total_good_answers}</span>
      </p>
      <p>
        Number of bad answers <span>{statsData.total_bad_answers}</span>
      </p>
    </div>
  );
}
