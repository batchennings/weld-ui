# il faut cd vers le dossier des icones avant de lancer le script
import glob, os, re
tsx_import = "import { IconProps } from './shared/IconProps';\n"

os.chdir(".")

i = open("index.ts", "x") # on recensera toutes les icones ici

for f in glob.glob('*.svg'):
    
    # le nom d'origine est au format CamelCase : e.g. 'MonIcone.svg'
    name = os.path.splitext(f)[0] # le nom sans l'extension (MonIcone)

    # le filename est un transformation de 'MonIcone' vers 'mon-icone'
    name_parts = re.findall('[A-Z][^A-Z]*', name)
    for x,p in enumerate(name_parts):
        l = p.lower()
        name_parts[x] = l
    filename = '-'.join(name_parts)

    t = open(filename+".tsx", "x") # on crée le composant d'après le svg
    with open(f) as file:
        f_content = file.read()
        print('reading '+name)

        # on écrit le composant en intégrant le contenu du svg
        t.write(tsx_import)
        t.write("const "+name+" = ({  size = 20, color = 'currentColor', color = 'currentColor', ...props}: IconProps) => ( \n")
        t.write(f_content) 
        t.write('\n);\n')
        t.write('export {'+name+'};\n')
        t.close()

        i.write('export * from \'./'+filename+'\';\n')

i.close()