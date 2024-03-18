interface CardContent {
  title: string,
  subTitle: string,
  buttonText: string,
  image,
}


interface INewsRequest {
  query: string,
  radius: number,
  maxNumberOfItems: number,
  offset: number
}

interface INewsItem {
  displayName: string
  links: string,
  alineas: {
    titel: string
    opgemaaktetekst: string
    bestanden: string,
    alineatype: string
  }[],
  uid: string,
  url: string,
  publicatiedatum: string,
  availabletranslations: string,
  titel: string,
  gebied: string,
  introductie: string,
  afbeelding: {
    url: string,
    alttext: string,
  },
  locaties: [
    {
      latitude: string,
      longitude: string,
    }
  ],
  urltipformulier: string,
  uidtipformulier: string,
  tags: string[]
}

interface IIterator {
  last: boolean,
  offset: number,
}

interface INewsResponse {
  iterator: IIterator,
  nieuwsberichten: INewsItem[],
}

interface IMissingPerson {
  displayName:           null;
  links:                 null;
  uid:                   string;
  url:                   string;
  publicatiedatum:       Date;
  availabletranslations: IAvailabletranslation[];
  documenttype:          string;
  titel:                 string;
  zaaknummer:            string;
  vermistsinds:          Date;
  laatstgezienin:        string;
  afbeeldingen:          IImage[];
  signalementen:         ISignalement[];
  introductie:           string;
  omschrijving:          string;
  vragen:                string;
  locaties:              ILocation[];
  meerafbeeldingen:      IImage[];
  urltipformulier:       string;
  videos:                null;
  uwtip:                 string;
}

interface IImage {
  url:     string;
  alttext: string;
}

interface IAvailabletranslation {
  language: string;
  id:       string;
}

interface ILocation {
  latitude:  number;
  longitude: number;
}

interface ISignalement {
  afbeelding:        Afbeeldingen;
  titel:             string;
  persoonskenmerken: IPersonalDetail[];
}

interface IPersonalDetail {
  label:  string;
  waarde: string;
}