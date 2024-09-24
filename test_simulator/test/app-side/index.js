import { MessageBuilder } from "../shared/message";

const messageBuilder = new MessageBuilder();

async function fetchData(ctx) {
  try {
    // Requesting network data using the fetch API
    // The sample program is for simulation only and does not request real network data, so it is commented here
    // Example of a GET method request
    // const res = await fetch({
    //   url: 'https://xxx.com/api/xxx',
    //   method: 'GET'
    // })
    // Example of a POST method request
    const res = await fetch({
       url: 'https://api.hamsterkombatgame.io/clicker/tap',
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         'Authorization':'Bearer 1721988897629BdsNw1YAPH2s6oiUhQlaXt9O5INWvu676k504StUvGiStw3Q8v3bnxghQ6YXl1EC999421186'
       },
      body: JSON.stringify(
        {
          "count":1000,
          "availableTaps":0,
          "timestamp":Date.now()
          }
       )
     })

    // A network request is simulated here, Reference documentation: https://jsonplaceholder.typicode.com/
    const resBody = typeof res.body === 'string' ? JSON.parse(res.body) : res.body

    ctx.response({
      data: { result: resBody },
    })

  } catch (error) {
    ctx.response({
      data: { result: "SEND" },
    });
  }
};

AppSideService({
  onInit() {
    messageBuilder.listen(() => { });

    messageBuilder.on("request", (ctx) => {
      const jsonRpc = messageBuilder.buf2Json(ctx.request.payload);
      if (jsonRpc.method === "GET_DATA") {
        return fetchData(ctx);
      }
    });
  },

  onRun() { },

  onDestroy() { },
});
