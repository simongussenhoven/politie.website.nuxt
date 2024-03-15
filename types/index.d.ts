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