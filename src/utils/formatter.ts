import moment, {Moment} from 'moment';

export const formatNumber = (value: number) => {
  let number = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return number;
};

export const formatDate = (value: string | Moment | Date) => {
  return moment(new Date(`${value}`)).format('LL');
};
