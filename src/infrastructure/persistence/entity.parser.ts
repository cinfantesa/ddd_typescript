interface EntityParser<E, D> {
  toEntity(domain: D): E;
  toDomain(entity: E): D;
}