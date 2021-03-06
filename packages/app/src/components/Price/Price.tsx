import _ from 'lodash';

const Price = ({ amount, unit } : { amount: number, unit: string }) => (
  <span data-testid="price">{unit}{amount / 100}</span>
);

Price.defaultProps = {
  unit: '$',
};

export default Price;
