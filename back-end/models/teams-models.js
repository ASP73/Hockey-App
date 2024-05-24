const db = require("../db/connection");

exports.selectTeams = () => {
  return db
    .query(
      `SELECT team_id, team_name, team_division, team_start_time, venue_id FROM teams;`
    )
    .then(({ rows }) => {
      if (rows.length === 0) {
        return Promise.reject({ status: 404, msg: "no teams in database" });
      } else return rows;
    });
};