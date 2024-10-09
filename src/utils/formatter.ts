import { formatDistanceToNow, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function dateTimeToNowFormatter(date: string){
    const loadedDate = parseISO(date);
    const timeDifference = formatDistanceToNow(loadedDate, { addSuffix: true, locale: ptBR });
    return timeDifference;
}