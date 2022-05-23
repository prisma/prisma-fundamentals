import pkg from '@prisma/sdk';
  const { createDatabase, getConfig, getSchema, getSchemaPath, jestConsoleContext, jestContext } = pkg;

function returnSchema() {
  
  const schemaPath = (await getSchemaPath())
  const datamodel = await getSchema(schemaPath)

  return(datamodel)
}

function returnConfg() {

  const schemaPath = (await getSchemaPath())
  const datamodel = await getSchema(schemaPath)
  const config = await getConfig({ datamodel })

  return(config)
}