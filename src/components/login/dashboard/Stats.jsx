export default function Stats({ statsData, nrOfUsers }) {
  return (
    <div>
      <h1>Info</h1>
      <div className='stats-grid'>
        <p className='stats-panels'>
          Number of quizes taken{' '}
          <span className='stats-number'>{statsData.quizes_taken}</span>
        </p>
        <p className='stats-panels'>
          Number of users <span className='stats-number'>{nrOfUsers}</span>
        </p>
        <p className='stats-panels'>
          Number of good answers{' '}
          <span className='stats-number'>{statsData.total_good_answers}</span>
        </p>
        <p className='stats-panels'>
          Number of bad answers{' '}
          <span className='stats-number'>{statsData.total_bad_answers}</span>
        </p>
      </div>
    </div>
  );
}
