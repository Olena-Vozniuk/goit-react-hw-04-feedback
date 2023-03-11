import PropTypes from 'prop-types';
import { StatisticsStyle } from './Statistics.styled';


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <StatisticsStyle>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total()}</li>
        <li>Positive feedback: {positivePercentage() ? positivePercentage() : 0}%</li>
    </StatisticsStyle>);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;