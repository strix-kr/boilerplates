const timeFormat = {
  FULLDATE: 'YYYY-MM-DD',
  FULLTIME: 'HH:mm:ss',
  TIME_MIN: 'HH:mm',
  TIME_HOUR: 'HH',

  YEARMONTH: 'YYYY-MM',
};

timeFormat.FULLDATETIME = `${timeFormat.FULLDATE} ${timeFormat.FULLTIME}`;
timeFormat.HALFDATETIME = `${timeFormat.FULLDATE} ${timeFormat.TIME_MIN}`;

export default timeFormat;
