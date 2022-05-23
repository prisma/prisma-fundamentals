import pkg from '@prisma/sdk';
const { getDMMF, getSchema, getSchemaPath } = pkg;

const schemaPath = (await getSchemaPath())
const datamodel = await getSchema(schemaPath)
const dmmf = await getDMMF({datamodel: datamodel})

console.log(JSON.stringify(dmmf))