const { fetchFixturesById } = require("../models/fixtures_byId.model");
const { selectTeamsheet } = require("../models/teamsheet-model");

exports.getTeamsheet = (request, response, next) => {
    const { fixture_id, team_id } = request.params;
    selectTeamsheet(fixture_id, team_id)
        .then((teamsheet) => {
            if (teamsheet.length > 0) {
                response.status(200).send({ teamsheet });
            }
        })
        .then(() => {
            return Promise.all([
                fetchFixturesById(fixture_id),
                //fetchTeamById
            ]);
        })
        .then(() => {
            response.status(200).send({ teamsheet: [] });
        })
        .catch((error) => {
            next(error);
        });
};
