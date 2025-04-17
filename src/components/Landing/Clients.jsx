const Clients = () => {
  const client = [
    {
      id: 1,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRQP6OshODUQk2UWT9R4GoRjap11GKuiLIA&s'
    }, //allbirds
    {
      id: 2,
      url: 'https://cdn.worldvectorlogo.com/logos/bando.svg'
    }, //Bando
    {
      id: 3,
      url: 'https://herschelsupply.filecamp.com/static/themes/WoqG2jvIagDAu78T.png'
    }, //Herschel
    {
      id: 4,
      url: 'https://play-lh.googleusercontent.com/1uMKBfyjElkzBt6M5VsLZacwb_pz9WvjlceUE8mZ79ivgwnJTOQSrXT1BuYXMGqRkA'
    }, //Chubbies
    {
      id: 5,
      url: 'https://www.amd.com/content/dam/amd/en/images/logos/partners/aws-colored-logo-padded.png'
    }, //aws
    {
      id: 6,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFTQdiFOr3C-AMwwkaTOKHAegmoQQz8sl1vA&s'
    }, //Gymshark
    {
      id: 7,
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Logo_de_Auth0.svg'
    }, //auth0
    {
      id: 8,
      url: 'https://mir-s3-cdn-cf.behance.net/projects/404/3f3548111786679.Y3JvcCwyMTYzLDE2OTIsMjc4LDA.png'
    }, //Glossier
    {
      id: 9,
      url: 'https://simpauldesign.com/wp-content/uploads/2020/02/SendGrid-new-logo.png'
    }, //sendgrid
    { id: 10, url: 'https://cdn.worldvectorlogo.com/logos/github-icon-2.svg' }, //github
    {
      id: 11,
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1280px-Stripe_Logo%2C_revised_2016.svg.png'
    }, //stripe
    {
      id: 12,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3PpFCCYw4zHIUsvjxeF2kL2_IU7uMzrbBuw&s'
    } //VSC
  ]

  return (
    <div className="flex flex-col items-center w-full pt-32 mb-64">
      <p className="text-lg font-light">Clients & Partnerships</p>
      <p className="mt-10 text-5xl font-light text-center">
        <span className="font-medium text-blue-500">14,228,221</span> Al
        headshots created <br /> for
        <span className="font-medium text-amber-300"> 86,412</span> happy
        customers
      </p>
      <div className="flex flex-wrap justify-center max-w-4xl mx-auto mt-10 gap-y-8">
        {client.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center w-1/2 px-4 sm:w-1/3 md:w-1/6"
          >
            <img
              src={item.url}
              alt={`Client ${item.id}`}
              className="object-contain w-auto rounded-lg max-h-16"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Clients
