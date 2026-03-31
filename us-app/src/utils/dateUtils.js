import { differenceInDays, format } from 'date-fns';
export const formatDate = (date) => format(new Date(date), 'PPP');
export const daysTogether = (from) => differenceInDays(new Date(), new Date(from));
