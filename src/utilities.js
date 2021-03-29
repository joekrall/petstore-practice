export const getAllAvailablePets = () => {
  return fetch('https://petstore.swagger.io/v2/pet/findByStatus?status=available')
    .then((data) => data.json())
}