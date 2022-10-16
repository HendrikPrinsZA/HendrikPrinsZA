async function getData(url) {
  try {
    let response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) throw response.statusText;

    return response;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export {
  getData
}
